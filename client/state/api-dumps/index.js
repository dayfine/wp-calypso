/** @format */
/**
 * External dependencies
 */
import React from 'react';
import { bindActionCreators, connect } from 'react-redux';
import { get, mapValues, noop, set } from 'lodash';

/**
 * Internal dependencies
 */
import { dispatchRequest } from 'state/data-layer/wpcom-http/utils';
import { http as rawHttp } from 'state/http/actions';

const API_DATA_REQUEST = { type: 'API_DATA_REQUEST' };

const HTTP_BASE = {
	onSuccess: API_DATA_REQUEST,
	onFailure: API_DATA_REQUEST,
	onProgress: API_DATA_REQUEST,
};

export const dataTypes = {
	GEO: {
		fetch: () => rawHttp( { method: 'GET', url: 'https://public-api.wordpress.com/geo/' } ),
		dataPath: null,
	},
};

export const apiData = ( state, dispatch ) => ( type, id ) => {
	if ( ! dataTypes.hasOwnProperty( type ) ) {
		return null;
	}

	const { basePath, dataPath, fetch } = dataTypes[ type ];

	const data = 'function' === typeof dataPath ? get( baseState, dataPath( id ) ) : state;

	dispatch( { ...HTTP_BASE, apiData: { type }, ...fetch( id ) } );

	return data;
};

export const connectWithApi = (
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
	options
) => Component => {
	const stateMapper = ( state, ownProps ) => ( {
		...mapStateToProps( state, ownProps ),
		stolenState: state,
	} );

	const dispatchMapper =
		'function' === typeof mapDispatchToProps
			? ( dispatch, ownProps ) =>
					Object.assign( {}, mapDispatchToProps( dispatch, ownProps ), {
						stolenDispatch: dispatch,
					} )
			: dispatch =>
					Object.assign( {}, bindActionCreators( mapDispatchToProps, dispatch ), {
						stolenDispatch: dispatch,
					} );

	const apiMapper = props => {
		const { stolenDispatch, stolenState, apiData } = props;

		const apiStuffer = apiDump( stolenState, stolenDispatch );
		return apiValues( apiData, ( [ type, id ] ) => apiStuffer( type, id ) );
	};

	const propMerger = ( s, d, ownProps ) => {
		const { stolenState, apiData, ...stateProps } = s;
		const { stolenDispatch, ...dispatchProps } = d;

		const baseProps =
			'function' === typeof mergeProps
				? mergeProps( stateProps, dispatchProps, ownProps )
				: { ...ownProps, ...stateProps, ...dispatchProps };

		return { ...baseProps, ...apiData( stolenState, stolenDispatch, apiData ) };
	};

	return connect( stateMapper, dispatchMapper, propMerger, options )( Component );
};

const reducer = ( state = {}, { type, data } ) => {
	const { dataPath } = dataTypes[ type ];

	if ( 'API_DATA_UPDATE' === type ) {
		return set( state, dataPath( data ), data );
	}

	return state;
};

const middlewarer = type => {
	const onSuccess = ( { dispatch }, action, data ) => {
		const { type } = action.apiData;
		const { basePath, dataPath, fromApi = noop } = dataTypes[ type ];

		dispatch( {
			type: API_DATA_UPDATE,
			path: dataPath( data ),
			data,
		} );
	};

	const onFailure = () => {};
	const onProgress = () => {};

	return dispatchRequest( onSuccess, onFailure, onProgress, { fromApi } );
};

const middleware = Object.keys( dataTypes ).reduce( ( handlers, type ) => ( {
	...handlers,
	[ `${ type }_REQUEST` ]: [ middlewarer( type ) ],
} ) );

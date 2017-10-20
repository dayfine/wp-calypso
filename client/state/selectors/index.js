/** @format */
/**
 * Every selector contained within this directory should have its default
 * export included in the list below. Please keep this list alphabetized for
 * easy scanning.
 *
 * For more information about how we use selectors, refer to the docs:
 *  - https://wpcalypso.wordpress.com/devdocs/docs/our-approach-to-data.md#selectors
 *
 * Studious observers may note that our project is not configured to support
 * "tree shaking", and that importing from this file might unnecessarily bloat
 * the size of bundles. Fear not! For we do not truly import from this file,
 * but instead use a Babel plugin "transform-imports" to transform the import
 * to its individual file.
 */

export areAllSitesSingleUser from './are-all-sites-single-user';
export areSitePermalinksEditable from './are-site-permalinks-editable';
export canCurrentUser from './can-current-user';
export canCurrentUserManagePlugins from './can-current-user-manage-plugins';
export countPostLikes from './count-post-likes';
export editedPostHasContent from './edited-post-has-content';
export findThemeFilterTerm from './find-theme-filter-term';
export getAccountRecoveryResetOptions from './get-account-recovery-reset-options';
export getAccountRecoveryResetOptionsError from './get-account-recovery-reset-options-error';
export getAccountRecoveryResetPasswordError from './get-account-recovery-reset-password-error';
export getAccountRecoveryResetRequestError from './get-account-recovery-reset-request-error';
export getAccountRecoveryResetSelectedMethod from './get-account-recovery-reset-selected-method';
export getAccountRecoveryResetUserData from './get-account-recovery-reset-user-data';
export getAccountRecoveryValidationError from './get-account-recovery-validation-error';
export getAccountRecoveryValidationKey from './get-account-recovery-validation-key';
export getActiveReplyCommentId from './get-active-reply-comment-id';
export getActivityLog from './get-activity-log';
export getActivityLogs from './get-activity-logs';
export getBillingTransactions from './get-billing-transactions';
export getBlockedSites from './get-blocked-sites';
export getBlogStickers from './get-blog-stickers';
export getContactDetailsCache from './get-contact-details-cache';
export getContactDetailsExtraCache from './get-contact-details-extra-cache';
export getCurrentLocaleSlug from './get-current-locale-slug';
export getCurrentPlanPurchaseId from './get-current-plan-purchase-id';
export getCurrentUserPaymentMethods from './get-current-user-payment-methods';
export getImageEditorIsGreaterThanMinimumDimensions from './get-image-editor-is-greater-than-minimum-dimensions';
export getImageEditorOriginalAspectRatio from './get-image-editor-original-aspect-ratio';
export getJetpackConnectionStatus from './get-jetpack-connection-status';
export getJetpackJumpstartStatus from './get-jetpack-jumpstart-status';
export getJetpackModule from './get-jetpack-module';
export getJetpackModules from './get-jetpack-modules';
export getJetpackModulesRequiringConnection from './get-jetpack-modules-requiring-connection';
export getJetpackSetting from './get-jetpack-setting';
export getJetpackSettings from './get-jetpack-settings';
export getJetpackSettingsSaveError from './get-jetpack-settings-save-error';
export getJetpackSettingsSaveRequestStatus from './get-jetpack-settings-save-request-status';
export getJetpackSites from './get-jetpack-sites';
export getJetpackUserConnection from './get-jetpack-user-connection';
export getJpoConnect from './get-jpo-connect';
export getMagicLoginCurrentView from './get-magic-login-current-view';
export getMagicLoginRequestAuthError from './get-magic-login-request-auth-error';
export getMagicLoginRequestedAuthSuccessfully from './get-magic-login-requested-auth-successfully';
export getMagicLoginRequestedEmailSuccessfully from './get-magic-login-requested-email-successfully';
export getMagicLoginRequestEmailError from './get-magic-login-request-email-error';
export getMedia from './get-media';
export getMediaItem from './get-media-item';
export getMediaStorageLimit from './get-media-storage-limit';
export getMediaStorageUsed from './get-media-storage-used';
export getMediaUrl from './get-media-url';
export getMenuItemTypes from './get-menu-item-types';
export getMenusUrl from './get-menus-url';
export getNetworkSites from './get-network-sites';
export getOriginalUserSetting from './get-original-user-setting';
export getPastBillingTransaction from './get-past-billing-transaction';
export getPastBillingTransactions from './get-past-billing-transactions';
export getPluginUploadError from './get-plugin-upload-error';
export getPluginUploadProgress from './get-plugin-upload-progress';
export getPosterUploadProgress from './get-poster-upload-progress';
export getPosterUrl from './get-poster-url';
export getPostLikes from './get-post-likes';
export getPostRevision from './get-post-revision';
export getPostRevisionChanges from './get-post-revision-changes';
export getPostRevisions from './get-post-revisions';
export getPostRevisionsAuthorsId from './get-post-revisions-authors-id';
export getPostSharePublishedActions from './get-post-share-published-actions';
export getPostShareScheduledActions from './get-post-share-scheduled-actions';
export getPrimaryDomainBySiteId from './get-primary-domain-by-site-id';
export getPrimarySiteId from './get-primary-site-id';
export getPublicizeConnection from './get-publicize-connection';
export getPublicSites from './get-public-sites';
export getRawOffsets from './get-raw-offsets';
export getReaderAliasedFollowFeedUrl from './get-reader-aliased-follow-feed-url';
export getReaderFeedsCountForQuery from './get-reader-feeds-count-for-query';
export getReaderFeedsForQuery from './get-reader-feeds-for-query';
export getReaderFollowedTags from './get-reader-followed-tags';
export getReaderFollowForBlog from './get-reader-follow-for-blog';
export getReaderFollowForFeed from './get-reader-follow-for-feed';
export getReaderFollows from './get-reader-follows';
export getReaderFollowsCount from './get-reader-follows-count';
export getReaderFollowsLastSyncTime from './get-reader-follows-last-sync-time';
export getReaderRecommendedSites from './get-reader-recommended-sites';
export getReaderRecommendedSitesPagingOffset from './get-reader-recommended-sites-paging-offset';
export getReaderTags from './get-reader-tags';
export getReaderTeams from './get-reader-teams';
export getRegistrantWhois from './get-registrant-whois';
export getRequestedRewind from './get-requested-rewind';
export getRestoreError from './get-restore-error';
export getRestoreProgress from './get-restore-progress';
export getRewindStartDate from './get-rewind-start-date';
export getRewindStatusError from './get-rewind-status-error';
export getScheduledPublicizeShareActionTime from './get-scheduled-publicize-share-action-time';
export getSelectedOrAllSites from './get-selected-or-all-sites';
export getSelectedOrAllSitesJetpackCanManage from './get-selected-or-all-sites-jetpack-can-manage';
export getSelectedOrAllSitesWithPlugins from './get-selected-or-all-sites-with-plugins';
export getSelectedOrPrimarySiteId from './get-selected-or-primary-site-id';
export getSharingButtons from './get-sharing-buttons';
export getSimplePayments from './get-simple-payments';
export getSiteComment from './get-site-comment';
export getSiteComments from './get-site-comments';
export getSiteCommentsTree from './get-site-comments-tree';
export getSiteConnectionStatus from './get-site-connection-status';
export getSiteDefaultPostFormat from './get-site-default-post-format';
export getSiteGmtOffset from './get-site-gmt-offset';
export getSiteIconId from './get-site-icon-id';
export getSiteIconUrl from './get-site-icon-url';
export getSiteId from './get-site-id';
export getSiteMonitorSettings from './get-site-monitor-settings';
export getSiteOptions from './get-site-options';
export getSites from './get-sites';
export getSiteSetting from './get-site-setting';
export getSitesItems from './get-sites-items';
export getSiteSlugsForUpcomingTransactions from './get-site-slugs-for-upcoming-transactions';
export getSiteStatsQueryDate from './get-site-stats-query-date';
export getSiteStatsViewSummary from './get-site-stats-view-summary';
export getSiteTimezoneName from './get-site-timezone-name';
export getSiteTimezoneValue from './get-site-timezone-value';
export getSiteUrl from './get-site-url';
export getThemeFilters from './get-theme-filters';
export getThemeFilterStringFromTerm from './get-theme-filter-string-from-term';
export getThemeFilterTerm from './get-theme-filter-term';
export getThemeFilterTermFromString from './get-theme-filter-term-from-string';
export getThemeFilterTerms from './get-theme-filter-terms';
export getThemeFilterTermsTable from './get-theme-filter-terms-table';
export getThemeFilterToTermTable from './get-theme-filter-to-term-table';
export getThemeShowcaseDescription from './get-theme-showcase-description';
export getThemeShowcaseTitle from './get-theme-showcase-title';
export getTimezones from './get-timezones';
export getTimezonesByContinent from './get-timezones-by-continent';
export getTimezonesLabel from './get-timezones-label';
export getTimezonesLabels from './get-timezones-labels';
export getTimezonesLabelsByContinent from './get-timezones-labels-by-continent';
export getUnsavedUserSettings from './get-unsaved-user-settings';
export getUpcomingBillingTransactions from './get-upcoming-billing-transactions';
export getUploadedPluginId from './get-uploaded-plugin-id';
export getUserDevices from './get-user-devices';
export getUserSetting from './get-user-setting';
export getUserSettings from './get-user-settings';
export getVisibleSites from './get-visible-sites';
export getWhois from './get-whois';
export hasBrokenSiteUserConnection from './has-broken-site-user-connection';
export hasInitializedSites from './has-initialized-sites';
export hasJetpackSites from './has-jetpack-sites';
export hasSitePendingAutomatedTransfer from './has-site-pending-automated-transfer';
export hasUnsavedUserSettings from './has-unsaved-user-settings';
export hasUserAskedADirectlyQuestion from './has-user-asked-a-directly-question';
export hasUserSettings from './has-user-settings';
export isAccountRecoveryResetOptionsReady from './is-account-recovery-reset-options-ready';
export isAccountRecoveryResetPasswordSucceeded from './is-account-recovery-reset-password-succeeded';
export isAccountRecoveryUserDataReady from './is-account-recovery-user-data-ready';
export isActivatingJetpackJumpstart from './is-activating-jetpack-jumpstart';
export isActivatingJetpackModule from './is-activating-jetpack-module';
export isAmbiguousThemeFilterTerm from './is-ambiguous-theme-filter-term';
export isAutomatedTransferActive from './is-automated-transfer-active';
export isAutomatedTransferFailed from './is-automated-transfer-failed';
export isBusinessPlanUser from './is-business-plan-user';
export isCommentsTreeInitialized from './is-comments-tree-initialized';
export isConnectedSecondaryNetworkSite from './is-connected-secondary-network-site';
export isDeactivatingJetpackJumpstart from './is-deactivating-jetpack-jumpstart';
export isDeactivatingJetpackModule from './is-deactivating-jetpack-module';
export isDeletingPublicizeShareAction from './is-deleting-publicize-share-action';
export isDeletingSite from './is-deleting-site';
export isDirectlyFailed from './is-directly-failed';
export isDirectlyReady from './is-directly-ready';
export isDirectlyUninitialized from './is-directly-uninitialized';
export isDomainOnlySite from './is-domain-only-site';
export isDropZoneVisible from './is-drop-zone-visible';
export isEditingPublicizeSharePostAction from './is-editing-publicize-share-post-action';
export isEligibleForDomainToPaidPlanUpsell from './is-eligible-for-domain-to-paid-plan-upsell';
export isEligibleForFreeToPaidUpsell from './is-eligible-for-free-to-paid-upsell';
export isFetchingAutomatedTransferStatus from './is-fetching-automated-transfer-status';
export isFetchingJetpackModules from './is-fetching-jetpack-modules';
export isFetchingMagicLoginAuth from './is-fetching-magic-login-auth';
export isFetchingMagicLoginEmail from './is-fetching-magic-login-email';
export isFetchingPublicizeShareActionsPublished from './is-fetching-publicize-share-actions-published';
export isFetchingPublicizeShareActionsScheduled from './is-fetching-publicize-share-actions-scheduled';
export isFollowing from './is-following';
export isHiddenSite from './is-hidden-site';
export isJetpackModuleActive from './is-jetpack-module-active';
export isJetpackModuleUnavailableInDevelopmentMode from './is-jetpack-module-unavailable-in-development-mode';
export isJetpackSettingsSaveFailure from './is-jetpack-settings-save-failure';
export isJetpackSiteConnected from './is-jetpack-site-connected';
export isJetpackSiteInDevelopmentMode from './is-jetpack-site-in-development-mode';
export isJetpackSiteInStagingMode from './is-jetpack-site-in-staging-mode';
export isJetpackUserMaster from './is-jetpack-user-master';
export isMainSiteOf from './is-main-site-of';
export isMappedDomainSite from './is-mapped-domain-site';
export isNotificationsOpen from './is-notifications-open';
export isPendingEmailChange from './is-pending-email-change';
export isPluginActive from './is-plugin-active';
export isPluginUploadComplete from './is-plugin-upload-complete';
export isPluginUploadInProgress from './is-plugin-upload-in-progress';
export isPrivateSite from './is-private-site';
export isPublicizeEnabled from './is-publicize-enabled';
export isReaderCardExpanded from './is-reader-card-expanded';
export isRegeneratingJetpackPostByEmail from './is-regenerating-jetpack-post-by-email';
export isRequestingAccountRecoveryReset from './is-requesting-account-recovery-reset';
export isRequestingAccountRecoveryResetOptions from './is-requesting-account-recovery-reset-options';
export isRequestingBillingTransactions from './is-requesting-billing-transactions';
export isRequestingContactDetailsCache from './is-requesting-contact-details-cache';
export isRequestingJetpackConnectionStatus from './is-requesting-jetpack-connection-status';
export isRequestingJetpackJumpstartStatus from './is-requesting-jetpack-jumpstart-status';
export isRequestingJetpackSettings from './is-requesting-jetpack-settings';
export isRequestingJetpackUserConnection from './is-requesting-jetpack-user-connection';
export isRequestingMedia from './is-requesting-media';
export isRequestingMediaItem from './is-requesting-media-item';
export isRequestingMissingSites from './is-requesting-missing-sites';
export isRequestingPostLikes from './is-requesting-post-likes';
export isRequestingReaderTeams from './is-requesting-reader-teams';
export isRequestingResetPassword from './is-requesting-reset-password';
export isRequestingSharingButtons from './is-requesting-sharing-buttons';
export isRequestingSiteConnectionStatus from './is-requesting-site-connection-status';
export isRequestingSiteMonitorSettings from './is-requesting-site-monitor-settings';
export isRequestingWhois from './is-requesting-whois';
export isRewindActivating from './is-rewind-activating';
export isRewindActive from './is-rewind-active';
export isRtl from './is-rtl';
export isSavingSharingButtons from './is-saving-sharing-buttons';
export isSchedulingPublicizeShareAction from './is-scheduling-publicize-share-action';
export isSchedulingPublicizeShareActionError from './is-scheduling-publicize-share-action-error';
export isSendingBillingReceiptEmail from './is-sending-billing-receipt-email';
export isSharingButtonsSaveSuccessful from './is-sharing-buttons-save-successful';
export isSiteAutomatedTransfer from './is-site-automated-transfer';
export isSiteBlocked from './is-site-blocked';
export isSiteOnFreePlan from './is-site-on-free-plan';
export isSiteOnPaidPlan from './is-site-on-paid-plan';
export isSiteSupportingImageEditor from './is-site-supporting-image-editor';
export isSiteUpgradeable from './is-site-upgradeable';
export isTracking from './is-tracking';
export isTransientMedia from './is-transient-media';
export isTwoStepEnabled from './is-two-step-enabled';
export isTwoStepSmsEnabled from './is-two-step-sms-enabled';
export isUpdatingJetpackSettings from './is-updating-jetpack-settings';
export isUpdatingSiteMonitorSettings from './is-updating-site-monitor-settings';
export isUserRegistrationDaysWithinRange from './is-user-registration-days-within-range';
export isUserSettingUnsaved from './is-user-setting-unsaved';
export isValidatingAccountRecoveryKey from './is-validating-account-recovery-key';
export isValidThemeFilterTerm from './is-valid-theme-filter-term';
export isVipSite from './is-vip-site';
export isWordpressUpdateSuccessful from './is-wordpress-update-successful';
export prependThemeFilterKeys from './prepend-theme-filter-keys';
export shouldShowVideoEditorError from './should-show-video-editor-error';
export shouldSyncReaderFollows from './should-sync-reader-follows';

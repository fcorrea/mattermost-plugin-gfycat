// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export default {
    ItemTapAction: {
        OPEN_EMBED_PAGE: 1,
        SHARE: 2,
    },

    Tab: {
        TRENDING: 0,
        REACTIONS: 1,
    },

    appName: {
        mattermost: 'mattermost',
    },
    /**
     * Backported from mattermost-webapp
     */
    Constants: {
	SYSTEM_MESSAGE_PREFIX: 'system_',
	AUTO_RESPONDER: 'system_auto_responder',
	PostTypes: {
	    FAKE_PARENT_DELETED: 'system_fake_parent_deleted',
	},
	KeyCodes: {
            ENTER: ['Enter', 13],
            V: ['v', 86],
	},
	TRIPLE_BACK_TICKS: /```/g,
    },
};

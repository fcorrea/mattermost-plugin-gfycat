import React from 'react';


import GfycatIcon from './components/svg/gfycat_icon.jsx';


class Plugin {
    initialize(registry, store) {
        registry.registerEmojiPickerTabAction(
            <GfycatIcon />,
            () => {
                alert("Hello World!");
            },
        );
    }
}

window.registerPlugin('gfycat', new Plugin());

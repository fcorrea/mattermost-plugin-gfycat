import React from 'react';


import GfycatIcon from './components/svg/gfycat_icon.jsx';
import GifPicker from './gif_picker.jsx';


class Plugin {
    initialize(registry, store) {
        registry.registerEmojiPickerTabAction(
            <GfycatIcon />,
            <GifPicker
              onGifClick={() => {}}
            />,
        );
    }
}

window.registerPlugin('gfycat', new Plugin());

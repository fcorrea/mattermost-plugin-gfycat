import React from 'react';


class Plugin {
    initialize(registry, store) {
        registry.registerPostDropdownMenuAction(
            "Gfycat",
            () => {
                alert("Hello World!");
            },
            () => { return true; },
        );
    }
}

window.registerPlugin('gfycat', new Plugin());

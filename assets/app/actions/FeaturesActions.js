(function () {
    var FeaturesActions = {
        enableFeature: enableFeature,
        disableFeature: disableFeature,
        toggleFeature: toggleFeature,
        setFeatures: setFeatures,
    };

    function enableFeature(name) {
        return {
            type: 'ENABLE_FEATURE',
            name: name
        };
    }

    function disableFeature(name) {
        return {
            type: 'DISABLE_FEATURE',
            name: name
        };
    }

    function toggleFeature(name) {
        return {
            type: 'TOGGLE_FEATURE',
            name: name
        };
    }

    function setFeatures(features) {
        return {
            type: 'SET_FEATURES',
            features: features
        };
    }

    window.actions = window.actions || {};
    window.actions.FeaturesActions = FeaturesActions;
})();

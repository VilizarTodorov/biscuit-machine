import React from 'react';
import CookieView from '../Views/Cookie';

const getAdditionalClass = (isStamped, shouldCookieBeBaked) => {
    if (shouldCookieBeBaked) {
        return 'should-be-baked';
    }

    if (isStamped) {
        return 'stamped';
    }

    return 'produce';
};

const Cookie = ({ isStamped, shouldCookieBeBaked, isAnimationPaused }) => {
    const additionalClass = getAdditionalClass(isStamped, shouldCookieBeBaked);
    return <CookieView additionalClass={additionalClass} isAnimationPaused={isAnimationPaused}></CookieView>;
};

export default Cookie;

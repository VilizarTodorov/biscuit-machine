import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useStampCookie = (stampCookie, motorPulse, hasCookiesToStamp) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!hasCookiesToStamp) {
            return;
        }
        dispatch(stampCookie());
    }, [motorPulse, stampCookie, dispatch]);
};

export default useStampCookie;

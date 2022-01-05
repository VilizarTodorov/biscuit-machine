import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useProduceCookie = (produceCookie, motorPulse, hasProcessStarted, isMachineOff) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!hasProcessStarted || isMachineOff) {
            return;
        }
        dispatch(produceCookie());
    }, [motorPulse, produceCookie, dispatch]);
};

export default useProduceCookie;

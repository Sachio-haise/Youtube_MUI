import React from 'react'
import { useState } from 'react'
function useToggle() {
    const [el, setEl] = useState(null);
    const open = Boolean(el);
    const handleClick = (e) => {
        setEl(e.currentTarget);
    }
    const handleClose = () => {
        setEl(null)
    }
    return {
        el, open, handleClick, handleClose
    }
}

export default useToggle

export const pageAnim = {
    hidden: {
        opacity : 0,
        y : 300,
    },
    show: {
        opacity: 1,
        y : 0,
        transition : {
            duration: 0.5,
        }
    },
    exit : {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5
        }
    }
}

export const drawerAnim = {
    hidden: {
        opacity: 0,
        x: "100%",
    },
    show: {
        opacity: 1,
        x:0,
        transition: {
            duration: 0.75
        }
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.75
        }

    }
}
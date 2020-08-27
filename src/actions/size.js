export const SIZE = "SIZE";
export const size = (screenSize) => {

    return {
        type: SIZE,
        payload: screenSize,
    }
}
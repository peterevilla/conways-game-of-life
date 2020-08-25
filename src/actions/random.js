export const RANDOM = "RANDOM";
export const random = (isRandom) => {

    return {
        type: RANDOM,
        payload: isRandom,
    }
}
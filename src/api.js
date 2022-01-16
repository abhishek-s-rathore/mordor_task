export const getData = async () => {
    return await (await fetch("./data/data.json")).json();
};

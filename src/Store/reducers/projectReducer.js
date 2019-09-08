
const initState = {
    projects : [
        {id: "1958", title: 'Codaisseur Training', content: 'In this project, you will learn to how to install npm packages.'},
        {id: "138", title: 'React Training', content: 'In this project, you will learn to how to install react packages.'},
        {id: "1558", title: 'Redux Training', content: 'In this project, you will learn to how to install redux packages.'}
    ]
}
const projectReducer = ( state = initState, action) => {
    return state;
};

export default projectReducer
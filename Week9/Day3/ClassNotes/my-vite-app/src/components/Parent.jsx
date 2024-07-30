const Parent = (props) => {
    console.log(props);
    // return <h2>Parent Component</h2>
    if(props.auth === 'admin') return props.children;

    return <h2>Not Authorized to see child component</h2>
}
export default Parent
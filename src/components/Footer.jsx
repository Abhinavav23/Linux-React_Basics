function Footer(props){
    console.log(props);
    return (
        <footer>
            {props.children}
            <p>all rights reserved by Linux</p>
            <div>BatchName: {props.batchName}</div>
        </footer>
    )
}

export default Footer;

// props.children is used to access the tags passed while calling 
// the component between the opening and closing tag of the component

// ternary 
const a = 'role' ? 'Abhinav' : 'Ins';
console.log(a);


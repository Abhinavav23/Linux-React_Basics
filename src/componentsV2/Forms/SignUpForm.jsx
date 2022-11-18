export const SighUpForm = () => {

    let userInfo = {
        // name: '',
        // email: '',
        // address: '',
        // gender:'',
        // mobile: '',
    }

    const getUserInfo = (e) => {
        // switch case 
        // if(e.target.id === 'name'){
        //     userInfo.name = e.target.value
        // } else if(e.target.id === 'email'){
        //     userInfo.email = e.target.value
        // }else if(e.target.id === 'address'){
        //     userInfo.address = e.target.value
        // }else if(e.target.id === 'gender'){
        //     userInfo.gender = e.target.value
        // }else if(e.target.id === 'mobile'){
        //     userInfo.mobile = e.target.value
        // }

        // dynamically accessing the property of an object

        userInfo[e.target.id]= e.target.value;

        // userInfo[e.target.name]= e.target.value;
        // userInfo.name = abhinav
        // userInfo.email = abhinav@mail
    }

    const createUser = (e) => {
        e.preventDefault();
        console.log(userInfo);
    }

    return (
        <form onSubmit={createUser}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={getUserInfo}/>
            <br/>  <br/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={getUserInfo}/>
            <br/>  <br/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" onChange={getUserInfo}/>
            <br/>  <br/>
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" name="gender" onChange={getUserInfo}/>
            <br/>  <br/>
            <label htmlFor="mobile">Mob No</label>
            <input type="text" id="mobile" name="mobile" onChange={getUserInfo}/>
            <br/>  <br/>
            <input type="submit" value="submit" />
        </form>
    )
}

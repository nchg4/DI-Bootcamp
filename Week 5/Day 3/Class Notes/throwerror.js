function full(params) {
    try{
        return params + last
    } catch (error){
        // console.log(error);
        throw new Error('error in full function')

    }
}
try {
    full()
}catch(error) {
    console.log(error);
}


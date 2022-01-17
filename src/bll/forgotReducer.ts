const forgotInitialState = {

};

/* useEffect(()=>{
       forgotAPI.forgotEmail()
           .then(res=>[
               (res.status === 200){

               }
           ])
           .catch(err=>{
               console.dir(err)
               err.data.error
           })
   })*/


const FORGOT = 'FORGOT/SOME'

export const forgotReducer = (state = forgotInitialState, action: any) => {
    switch (action.type) {
        case FORGOT: { // blank
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};
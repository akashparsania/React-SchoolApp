export const regFormValidations = (data) => {
    let { name, val } = data;
    //console.log(data.errMsg);
    switch (name) {

        case 'uid':
            if (!val) {
                data.errMsg = "Please Enter UserID"
            }
            else {
                var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if (!emailRegExp.test(val)) {
                    data.errMsg = 'Please enter Valid Email';
                }
                else {
                    data.errMsg = '';
                }
            } break;

        case 'pwd':
            if (!val) {
                data.errMsg = "Please Enter Password"
            }
            else {

                if (val.length < 6) {
                    data.errMsg = 'Password must be minimum 6 character';
                }
                else {
                    data.errMsg = '';
                }
            } break;



        case 'phone':
            if (!val) {
                data.errMsg = "Please Enter Phone Number"
            }
            else {

                if (val.length != 10) {
                    data.errMsg = 'Phone number must be of 10 digits';
                }
                else {
                    data.errMsg = '';
                }
            } break;

        case 'gender':
            if (!val) {
                data.errMsg = "Please Select Gender"
            }else{
                data.errMsg ='';
            } break;


            case 'hobbies':
                
                if (!val) {
                    data.errMsg = "Please Select Hobbies"
                }
                else{
                    data.errMsg ='';
                }
                 break;


            case 'country':
                
                if (!val || val==='Please select Country' ) {
                    data.errMsg = "Please Select Your Country"
                    
                }
                else{
                    data.errMsg ='';
                }
                 break;

                 case 'address':
               
                if (!val) {
                    data.errMsg = "Please enter address"
                }
                else{
                    data.errMsg ='';
                }
                 break;
           


           
           
    }
   
    data.isShow = data.errMsg ? true : false;
}
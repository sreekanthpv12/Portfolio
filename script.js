	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }  

     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    // function sendmail(){
    //     var params = {
    //         name: document.getElementById("name").value ,
    //         email: document.getElementById("email").value ,
    //         message: document.getElementById("message").value ,
        
    //     };

    
    // const serviceID="service_e394czc" ;
    // const templateID="template_vhfqwwn";
    
    //     emailjs
    //         .send(serviceID,templateID,params)
    
    //         .then((res) => {
    //         document.getElementById("name").value="";
    //         document.getElementById("email").value="";
    //         document.getElementById("message").value="";
    //         console.log(res);
    //         alert("message sent succussfully");
    //         })
    
    //     .catch((err) => console.log(err));
    
    //     }
    function sendMail() {
        var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
      
        const serviceID = "service_e394czc";
        const templateID = "template_vhfqwwn";
      
          emailjs.send(serviceID, templateID, params)
          .then(res=>{
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your message sent successfully!!")
      
          })
          .catch(err=>console.log(err));
      
      }
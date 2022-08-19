window.addEventListener('load', () => 
{
    this.clockTimer.setingsClock();
});

var openDisplay = document.getElementById('openDisplay');

var cortanaFunction = 
{

    rigthOpen : function()
    {

        openDisplay.style.marginLeft = '0%';
        openDisplay.style.borderRadius = '0';
        openDisplay.style.borderBottomLeftRadius = '1.7rem';

    },
    leftOpen : function()
    {

        openDisplay.style.marginLeft = '50%';
        openDisplay.style.borderRadius = '0';
        openDisplay.style.borderBottomRightRadius = '1.7rem';

    },

};

// button arrow right
let arrowBtnRight = document.querySelector('#arrowBtnRight').addEventListener('click', () =>
{this.cortanaFunction.rigthOpen();});

// button arrow left
let arrowBtnleft = document.querySelector('#arrowBtnleft').addEventListener('click', () =>
{this.cortanaFunction.leftOpen();});

// display left
let leftDisplay = document.getElementById('leftDisplay').addEventListener('click', () =>
{this.cortanaFunction.rigthOpen();});

// display right
let rightDisplay = document.getElementById('rightDisplay').addEventListener('click', () =>
{this.cortanaFunction.leftOpen();});

// ============= clock =============
let hoursTag = document.querySelector('.hours');
let minutesTag = document.querySelector('.minutes');
let secondsTag = document.querySelector('.seconds');
let AmPmTag = document.querySelector('.AmPm');

var clockTimer = {

    setingsClock: function()
    {

        setInterval(() => {

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            if(h > 12)
            {
                AmPmTag.innerHTML = 'PM';
            } else {
                AmPmTag.innerHTML = 'AM'
            }

            s = (s < 10 ? '0' + s : s);
            m = (m < 10 ? '0' + m : m);
            h = (h < 10 ? '0' + h : h);

            

            hoursTag.innerHTML = h + ':';
            minutesTag.innerHTML = m + ':';
            secondsTag.innerHTML = s;
        
        }, 1000);
    },

};
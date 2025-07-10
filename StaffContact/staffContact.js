'use strict'

class StaffContact {
    #eleID = null;
    #datas = [
        {
            email: 'patanasak.ton@mahidol.ac.th'
        },
        {
            email: 'kanyapak.uma@mahidol.ac.th'
        },
        {
            email: 'chutima.kog@mahidol.ac.th'
        },
        {
            email: 'preeyanuch.mar@mahidol.ac.th'
        },
        {
            email: 'kanokkarn.sri@mahidol.ac.th'
        },
        {
            email: 'phakamat.tho@mahidol.edu'
        }
    ];

    constructor(eleID) {
        this.#eleID = eleID;
        this.#doGetListStaffContact();
    }

    #doGetListStaffContact = () => {
        if (this.#eleID !== null &&
            this.#datas !== null) {
            const eleRoot = document.getElementById(this.#eleID);

            if (eleRoot !== null) {
                const eleContactDefault = eleRoot.getElementsByClassName('contact')[0];

                eleContactDefault.remove();

                if (eleContactDefault !== undefined) {
                    this.#datas.forEach((data, index) => {
                        eleRoot.appendChild(eleContactDefault.cloneNode(true));

                        let eleContact = eleRoot.getElementsByClassName('contact')[index];

                        if (eleContact !== undefined) {
                            let eleContactEmail = eleContact.getElementsByClassName('email')[0];

                            if (eleContactEmail !== undefined)
                                eleContactEmail.innerHTML = data.email;
                        }
                    });
                }
            }
        }
    }
}
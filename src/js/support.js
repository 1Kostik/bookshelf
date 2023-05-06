const images = [
    {
    title: 'Save the Children',
    url:
    'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/support_img/save.png',
    img2: './img/support_img/save@2x.png',
    },
    {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/support_img/hope.png',
    img2:'./img/support_img/hope@2x.png',
    },
    {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/support_img/united.png',
    img2:'./img/support_img/united@2x.png',
    },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/support_img/med.png',
    img2:'./img/support_img/med@2x.png',
    },
    {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/support_img/sans.png',
    img2:'./img/support_img/sans@2x.png',
    },
    {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/support_img/razom.png',
    img2:'./img/support_img/razom@2x.png',
    },
    {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/support_img/razom.png',
    img2:'./img/support_img/razom@2x.png',
    },
    {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/support_img/vision.png',
    img2:'./img/support_img/vision@2x.png',
    },
    {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/support_img/charity.png',
    img2:'./img/support_img/charity@2x.png',
    },
]

const listGalleryEl = document.querySelector('.image_support');
const createGalleryMarkup = images.map(({ img }) => `<li><img src=${img} width='129' height='32' ></li>`).join('');
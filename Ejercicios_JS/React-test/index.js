const AVATAR = [
    {
        img: "./img/img1.jpg",
        name: "Jose González"
    },
    {
        img: "./img/img2.jpg",
        name: "Fran López"
    },
    {
        img: "./img/img1.jpg",
        name: "Juan Eguineche"
    }
]

// const getAvatar = params => `
//     <div class="avatar">
//         <img  src="${params.img}">
//         <span>${params.name}</span>
//     </div>
// `

const getAvatarDOM = params => {
    const div = document.createElement('div')
    const img = document.createElement('img');
    const span = document.createElement('span');
    const text = document.createTextNode(params.name);

    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(text);

    div.className = 'avatar';
    img.src = params.img;

    return div
}

// AVATAR.forEach(avatarParams => {
//     const avatar = getAvatar(avatarParams)
    
//     document.body.innerHTML += avatar;
// })

AVATAR.forEach(avatarParams => {
    const avatar = getAvatarDOM(avatarParams)
    
    document.body.appendChild(avatar);
})

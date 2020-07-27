function MenuComponent() {
    const menuDiv = document.createElement("div");
    menuDiv.id = "content"
    menuDiv.innerHTML = `
    <div class="row">
        

        <!-- BURGERS'S -->
        <div class="col s12 m6">
            <h2 class="header">Burger's</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/one-hamburger-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple burger. I am good at containing small bits of happiness</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Order: $35</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/one-hamburger-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple burger. I am good at containing small bits of happiness</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Order: $35</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/one-hamburger-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple burger. I am good at containing small bits of happiness</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Order: $35</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/one-hamburger-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple burger. I am good at containing small bits of happiness</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Order: $35</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- COFFEE'S -->
        <div class="col s12 m6">
            <h2 class="header">Coffee's</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/cupofcoffee-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/cupofcoffee-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/cupofcoffee-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            <div class="card horizontal">
                <div class="card-image">
                    <img class="responsive-img" src="./assets/cupofcoffee-resized.jpg" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return {menuDiv}
}

export {
    MenuComponent
}
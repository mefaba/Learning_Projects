function HomeComponent() {
    const homeDiv = document.createElement("div");
    homeDiv.id = "content"
    homeDiv.innerHTML = `
    <div class="row home-page">
        <div class="col s4 home-page-inner">
            <img src="./assets/one-hamburger.jpg" alt="hamburger_photo"/>
        </div>
            <div class="col s8 home-page-inner">
                <h1>We Serve Passion</h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni itaque quo commodi illum
                tempora ipsam quidem, placeat fugit assumenda dicta dolorum molestiae repellat animi
                error. Odit veniam quaerat aperiam eveniet. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Magni itaque quo commodi illum tempora ipsam quidem, placeat fugit
                assumenda dicta dolorum molestiae repellat animi error. Odit veniam quaerat aperiam
                eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni itaque quo
                commodi illum tempora ipsam quidem, placeat fugit assumenda dicta dolorum molestiae
                repellat animi error. Odit veniam quaerat aperiam eveniet. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Magni itaque quo commodi illum tempora ipsam quidem,
                placeat fugit assumenda dicta dolorum molestiae repellat animi error. Odit veniam
                quaerat aperiam eveniet.
            </div>
            <div class="col s4 home-page-inner">
                <img src="./assets/coffee-beans.jpg" alt="coffee_photo"/>
            </div>
        </div>
    </div>
    `;
    return {homeDiv}
}

export {
    HomeComponent
}

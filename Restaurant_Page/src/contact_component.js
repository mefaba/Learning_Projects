function ContactComponent() {
    const contactDiv = document.createElement("div");
    contactDiv.id = "content"
    contactDiv.innerHTML = `
    <div class="row">
        <div class="col s2"></div>
            <div class="contact-page col s8">
                <h1>Contact Us Dynamic</h1>
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
        <div class="col s2"></div>  
    </div>
    `;
    return {contactDiv}
}

export {
    ContactComponent
}
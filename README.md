

The Advanced Custom Order Form feature lets you add additional customization to your order form using a CSS customization model.

By using CSS, we give you as much control as possible while still ensuring that we comply with our accounting and business rules.

NOTE – You have to be familiar with HTML and CSS to use the Advanced Custom Order Form. If you don’t feel comfortable using HTML and CSS, you should find a developer who can help you, or use the standard Custom Order Form.

The following subjects are covered in this article:

    New Version
    Customizable Elements
    Implementing an Advanced Custom Order Form
    FAQ
    Resources

New Version

In the coming weeks, ClickBank will switch to an updated version of our order form. The new version has a number of benefits:

    Mobile responsiveness
    Modernized appearance
    Cart abandonment notifications

The new order form uses an updated version of the Advanced Custom Order Form (ACOF) template. If you are currently using an ACOF, it will continue to function during the migration period.

You can now submit ACOF files for approval that use the new template. The new version is displayed as New Advanced in the user interface. You can use new or old ACOFs on your live order forms, which lets you test the new order form and find a new design that works for you.

In the fall, we will remove support for the old order form. Any old ACOFs still in use will default to the new order form without any customization.
Customizable Elements

An ACOF includes many elements. Some elements are required for every ACOF, and some required or optional elements have limitations about how they can be customized.

The following elements are required on all ACOFs:

    ClickBank terms and conditions
    ClickBank Copyright
    ClickBank Logo – This element can be moved or resized but not styled.
    Affiliate Attribution information
    Kount logo
    McAfee, Norton, Better Business Bureau (BBB), and TRUSTe logos – This element can be moved but not resized or styled.
    Price & recurring payment section / payment details
    Language Dropdown
    Currency Dropdown
    Billing Information
    Shipping information – This element is only required for products with a physical component.
    Pay now button

For elements that include text, you can modify the text attributes, colors, background colors, and size, but you cannot modify the text content. For example, you can change the font or color of the Pay Now button, but you cannot change the text to "Buy Now."

The following elements are not required, but can be included and styled on an ACOF:

    Product Title
    Product Description
    ClickBank Guarantee
    Section Titles (e.g. Secure Payment Form, Order Details)
    Header and Logo Images

You can also upload and display your own images on the ACOF. These can be used for custom headers and footers, custom logos, background images, testimonials and branding. These images cannot cover or obscure any required elements.
Implementing an Advanced Custom Order Form

The implementation process includes the following steps:

    Downloading and Unzipping Files
    Designing and Editing Your Form
    Uploading Content
    Getting ClickBank Approval
    Enabling the Advanced Custom Order Form

Repeat as necessary to find optimal converting order form and/or order forms supporting additional products.
Downloading and Unzipping Files

The Resources section of this page contains a link to a ZIP archive. Download this archive. It includes all of the files necessary to create your customized order form.

The new Zip file contains:

    2-column-layout.html – This file contains a link to ‘theme-files/2-column-layout.css’.

    <link rel=”stylesheet” href=”theme-files/2-column-layout.css”>

    If you want to change the name of your custom CSS file for testing purposes, make sure it is reflected in the link above.
    div-container-layout.html – This file contains a link to ‘theme-files/div-container-layout.css’.

    <link rel=”stylesheet” href=”theme-files/div-container-layout.css”>

    If you want to change the name of your custom CSS file for testing purposes, make sure it is reflected in the link above.
    div-container-layout-diagram.pdf – A pdf showing the components of the div container layout.
    readonly-framework-files – This directory contains files needed to make your order form work locally. Do not modify the files in this directory.
    theme-files – This directory contains the custom-css.css files that you edit to create your advanced custom order form.
        2-column-layout.css – The CSS file template for the two-column order form.
        div-container-layout.css – The CSS file template for the fluid order form with divs.
        img – This directory should be used for any images that you create for use on your order form.

The old Zip file contains:

    default-template.html – Contains all of the HTML code (customizable and non-customizable elements) that make up the ClickBank order form. Use this file to preview your custom CSS and see how your order form will look when stylized. Remember that you'll only be able to upload your CSS file, we won't accept any changes to the HTML. By default, you'll see a link to the out-of-the-box ClickBank order form CSS:

    <link rel="stylesheet" href="cb-content/public/css/orderform.css">

    A link to your custom CSS file is included in the HTML template, but is commented out by default.

    <!--<link rel="stylesheet"  href="c/vendor_name/custom.css">-->

    If you want to change the name of your custom CSS file, make sure it is reflected in the link above. Uncomment the link to see your custom styling. 
    c folder – The location where you will add your custom order form files (both CSS and images).
    cb-content folder – Contains files that render the order form.
    CAUTION – Do not change or add any files in this folder.

Designing and Editing Your Form

Once you have downloaded the required files, you can use them to customize your order form.

    Open the index.html file and uncomment the link to the customizable CSS file.
    Open the customizable CSS file under theme/custom-theme.css
    Edit the file to customize your order form.
        When adding background images to the CSS, they must have a path name of img/<File Name>.<extension>. Images with other paths or from external URLs are not displayed.
    You can preview your changes locally by opening the default-template.html in any browser.
        We recommend that you perform testing against various common browser and OS combinations as experience across these can vary.
        If you don't want to display any DIV containers on your form, set the property for the DIV in your CSS to display:none; You can hide any DIV in your CSS, but your custom order form will not be approved if you hide any of the required elements.

Uploading Content

When you have completed your customization, you must upload the image and CSS files to your account.
Uploading Custom Order Form Images

All images that are referenced in the custom CSS must be uploaded and approved in your CB account. Images that are not uploaded cannot be displayed on the order form.

NOTE – Do not upload images that appear to be fields or checkboxes that have been filled or selected. These images can confuse customers.

To upload images:

    Log in to your ClickBank account.
    Click the Settings tab.
    Click My Images.
    Click the Add New Image button.
    Enter the image details:
        Name – This is used to identify the image throughout the process.
        Alt Tag – This is used to describe the image if a user has images disabled in their browser or is using a screen reader.
        Image Type – Select Advanced Custom Order Form Image. (gif, jpg, or png)
        Image – This is the image itself. Click Choose File, then browse to find the image.
    Click Upload.
    The image is submitted to ClickBank for approval.

Uploading Custom Order Form CSS Files

Once your custom images are approved, you need to upload your custom CSS file. Note if you've customized the order form with standard customization (replacement banners or sidebar colors, etc.), you'll see these customizations listed under 'Basic Templates'. All CSS customizations will be under ' Advanced Templates'.

    Log in to your ClickBank account.
    Click the Settings tab.
    Click My Order Form.
    Click the Add New Template button.
    Select the correct type:
        Advanced – An ACOF created using the old zip file.
        New Advanced – An ACOF created using the new zip file.
    Upload your CSS file.

If your CSS is valid, it will be submitted to ClickBank for approval. If there are any errors, the file won't be uploaded.

Errors when loading CSS can include:

    CSS file is empty
    CSS file is over 1 MB in size
    Invalid CSS formatting (e.g. missing curly brackets, colons or semi-colons, or missing identifers or properties
    CSS has absolute references to remote images beginning with http, https, or www.
    CSS has embedded images (e.g. url(data: image/gif;base64,R01GODhCg)
    @import rules are included (e.g. @import url ('/css/styles.css')

Getting ClickBank Approval

When submitted, the Order Form will be reviewed by the ClickBank business services team. Before it can be approved, we verify that it meets the following criteria:

    The ClickBank logo is present and visible.
    The ClickBank terms of sale are present and visible.
    The footer elements (such as Kount Logo, copyright, affiliate attribution information) are present and visible.
    The price and recurring payment information (if applicable) are present and visible.
    The images and/or design do not violate the ClickBank Client Contract.
    The images follow existing guidelines. ClickBank is unable to accept images, image name tags, and image alt tags that contain any violations of ClickBank policies (such as copyrighted material or trademark names, nudity, profanity, etc.).

Enabling the Advanced Custom Order Form

On the "My Order Form" page, you'll see all your uploaded order forms (pending and approved).

If you've used Basic Custom Order Forms before, you'll be familiar with how to use the cbskin parameters. The process works the same way for Advanced Custom Order Forms as with Basic.

Locate the cbskin parameter (cbskin=####) for the order form that you want to use. You need to include that URL parameter on all paylinks on your pitch page.

As a reminder, payment links have the following format:

http://item.nickname.pay.clickbank.net

Add your new parameter at the end of the URL with a /? before the parameter:

http://item.nickname.pay.clickbank.net/?cbskin=SkinID

Once you've updated your paylinks on your pitch page, customers will see your new custom order form, assuming the order form has been approved by ClickBank.

NOTE – If you are using PitchPlus Upsells, you should pass the cbskin parameter before you pass the flow ID parameter. For example:

http://item.nickname.pay.clickbank.net/?cbskin=1234&cbfid=2345

FAQ

Q: Does one CSS form work for all product types?

A: Yes. You don’t need to make a separate CSS file for each product type. All your customizations will apply for digital or physical products, and for standard or recurring products. Make sure that you don’t hide any elements in your CSS (e.g. shipping details) so that the customization works for all your products.

Q: Can I change the form fields?

A: No. You can only style, but not resize, the elements that are present. You can’t make changes to any text or add new fields to the form.

Q: Can I add images of security seals I own for my site?

A: No. You can only use the ClickBank seals since the order form is on our domain. Security seals must be clickable, therefore, no images of security fields are allowed. (ask Heather - vendors are using BBB logo; is that through us or is that them)

Q: I don’t see my images after uploading my custom CSS file. What happened? 

A: Make sure you first uploaded the images you wanted to use to your account. Then reference these image paths in your CSS with IMG/<Image name>.<extension>. We don’t allow any external links to other URLs for images or any other content in the CSS.

Q: Is the language dropdown required?

A: Yes, ClickBank has customers from around the world that purchase products. Even though your product may only be offered in one language, many customers prefer ordering in their native language. Conversion is higher for order forms that offer translation. Keep in mind that any text in your custom images will not be translated. 

For a full list of required elements, please see our PDF with documentation that is contained in the zip file.

Q: Can I put the price of my product in an image?

A: No. If you list the price in an image, it won’t dynamically update to reflect changes in taxes and currency. The pricing is unclear to the consumer if listed in a static image.
Resources
Files

    New ACOF Package – Standard ACOF Package including all elements on the order form including Div elements for Order Bump customization.
    Old ACOF Package – Standard ACOF Package including all elements on the order form including Div elements for Order Bump customization.

CSS Editing Tips
Change the Form Background Color

Change the blue text in the CSS (#fff) to edit the default form background color.

Body {
    Background-color: lightsteelblue
}

Remove or Edit the Shadow on Form Edges

Comment out the box-shadow property or set it to none to remove the shadow. You can also set a different style to the existing shadow.

#orderForm {
    background-color: red;
    padding-top: 5px;
    box-shadow: 0px 3px 10px #888
}

Add a Border Around the Form

Add the following line to add a border.

#main {
    border: 1px solid black;
} 

Change the Default Font

Change the specified text to change the default font.

.body{
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background: #fff;
}

Change the Style on Form Input Fields

This change controls the style of the Pay Now button.

#orderForm .form-control  {
    border-color: orange;
}


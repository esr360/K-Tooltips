[![Kayzen GS](https://raw.githubusercontent.com/esr360/K-Tooltips/gh-pages/logo-small.png "Kayzen GS Logo")](https://github.com/esr360/Kayzen-GS)

### K-Tooltips - A simple & lightweight tooltip solution.

> [View demo page for live examples](http://esr360.github.io/K-Tooltips/)

## Getting Started

Thanks for checking out K-Tooltips! Getting started is easy, but before you begin please ensure the following:

* Your project has jQuery 1.4 or higher
* You have Sass 3.4 or higher installed (required for customised options)

You can still use the default out-the-box options if you're not using Sass.

### Bower Installation

```html
bower install K-Tooltips
```

#### Load the Assets

```html
<!-- Stylesheet -->
<link rel="stylesheet" href="k-tooltips.css">
<!-- JS -->
<script src="k-tooltips.js">
```

#### Add the Markup

```html
<div data-tooltip="This is the tooltip content">
	The Result (hover me)                
</div>
```

#### Initialise the Function

```javascript
$("[data-tooltip]").tooltip();
```

## Default Tooltip

### Basic Example

#### Tooltip Markup

To create a tooltip, your element needs the `data-tooltip` **data-attribute**. The content of this attribute will make up your tooltip's content - HTML is allowed here.

```html
<div data-tooltip="This tooltip though">
	Hover Me                
</div>
```

The above example uses the default styles as defined in **k-tooltips.scss**. Change these values to your liking to style your default tooltip.

```scss
$tooltip-options: (
	// Size & Appearance
	max-width      : 500px,
	padding        : 1em,
	distance       : -1em,
	background     : rgba(black, 0.75),
	border-radius  : 0.25em,
	arrow-size     : 0.5em,
	arrow-color    : rgba(black, 0.75),
	// Typography
	font-size      : 1em,
	color          : white,
	text-transform : none,
	font-weight    : normal,
	// Other
	transition     : 0.4s,
	z-index        : 9999
);
```

_Whilst some default examples use **em**'s, you can use any unit that would normally work._

##### max-width

This is the maximum width your tooltip can grow to before content begins to wrap.

##### padding

Set the padding (inner-spacing) of your custom tooltip.

##### distance

This is the distance which your tooltip should be from the element it corresponds to. For most use cases this value should be negative, as the CSS positioning works on a left-to-right/top-to-bottom basis.

##### background

Set the base background color for your tooltip and the corresponding directional-arrow.

##### border-radius

Set the radius of your tooltip's border. To disable the border, set this to **0**.

##### arrow-size

This is the size of the directional arrow for your tooltip.

##### arrow-color
			
Set the color for the tooltip's directional arrow - generally this should be the same color as the tooltip's background.

##### font-size

Set your tooltip's default font-size.

##### color

Set your tooltip's default text color.

##### text-transform

Set your tooltip's default text-transform property.

##### font-weight

Set your tooltip's default font weight.

##### transition

Set the animation speed at which your tooltip should fade in. To disable animations set this value to **0s**.

##### z-Index

Set the z-index for your tooltip. This should generally be a fairly large number to ensure it does not render underneath any element.

#### tooltip-init

You need to call the **tooltip** function on your element:

```javascript
$("[data-tooltip]").tooltip();
```

The **tooltip** function accepts two custom parameters:

* Position
* Style

**Position** is a value from a hard coded list and can be either **top**, **bottom**, **left** or **right**. This sets the position of the tooltip element itself, so a value of **top** (default) would place the tooltip **above** the element.

**Style** controls the visual appearance of the tooltip. This value can be thought of as your tooltip's "theme". To create a theme, see the [custom tooltips](#custom-tooltips) section. This value is **default** by default, applying the default styles outlined above.

The above **init** is the same as writing:

```javascript
$("[data-tooltip]").tooltip({
	position : "top",
	style    : "default"
});
```

### Inline Example

To use K-Tooltips on an inline element, for example on a word in a sentence, your element also needs the **inline-tooltip** class:

```html
<span class="inline-tooltip" data-tooltip="This is an inline tooltip">
	inline-tooltip
</span>
```

## Custom Tooltips

It is possible to create any number of differently styled tooltips to use in your project. Here is an exampe of a tooltip using custom styles:

#### Creating the Styles

K-Tooltips come with a **light** theme which can be used instead of the default dark tooltip. You can add all other custom styles you may want below the provided **light** one, or above if you're feeling crazy.

```scss
$tooltip-styles: (
	light: (
		background : rgba(white, 0.8),
		color      : #444
	),
	demo-style-1: (
		transition     : 0s,
		distance       : -3em,
		background     : #34DDDD,
		border-radius  : 1em,
		arrow-size     : 1em,
		text-transform : uppercase
	)
);
```

Any style included here can be passed to the **style** parameter when initialising your tooltip:

```javascript
$("[data-tooltip]").tooltip({
	style : "demo-style-1"
});
```

If using more than one tooltip style in a single project, we cannot initialise the default tooltip on the naked `[data-tooltip]` element, we must do something like this:

```javascript
$("[data-tooltip]:not([class*="tooltip-"])").tooltip();
```

This allows us to apply the default tooltip to any element with the **data-tooltip** attribute as normal, whilst still allowing us to use other themes. The logic being that all custom styles will be applied with a unique class that contains the word **tooltip** followed by a hyphen:

```javascript
$(".tooltip-demo-style-1").tooltip({
	position : "bottom",
	style    : "demo-style-1"
});
```

Which would be used like so:

```html
<div class="tooltip-demo-style-1" data-tooltip="This is a custom tooltip">
	Hover Me                
</div>
```

## More Examples

#### Left Tooltip

```html
<div class="tooltip-left" data-tooltip="This is a custom tooltip">
	Hover Me                
</div>
<script>
	$(".tooltip-left").tooltip({
		position : "left"
	});
</script>
```

#### Right Tooltip

```html
<div class="tooltip-right" data-tooltip="This is a custom tooltip">
	Hover Me                
</div>
<script>
	$(".tooltip-right").tooltip({
		position : "right"
	});
</script>
```

#### Light Tooltip

```html
<div class="tooltip-light" data-tooltip="This is a custom tooltip">
	Hover Me                
</div>
<script>
	$(".tooltip-light").tooltip({
		style : "light"
	});
</script>
```

#### Custom Tooltip

```javascript
$tooltip-styles: (
	...
	demo-style-2: (
		background     : linear-gradient(to bottom, #00dbdb 0%, #258dc8 100%),
		border-radius  : 0,
		arrow-color    : #258dc8,
		transition     : 1.6s
	)
);
```

```html
<div class="tooltip-demo-style-2" data-tooltip="This is a custom tooltip">
	Hover Me                
</div>
<script>
	$(".demo-style-2").tooltip({
		style : "tooltip-demo-style-2"
	});
</script>
```

## Help, Support & Contributing

For all issues, bugs suggestions and feature requests, please use the [Github issues page](https://github.com/esr360/K-Tooltips/issues). Any and all contributions are welcomed!

Follow [@esr360](https://twitter.com/ESR360) on Twitter!
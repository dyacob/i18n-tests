var tests = {
	'the-translate-attribute-007.html': [
	'no translate attribute',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'In the default case, ie. with no translate attribute in the page, javascript will detect the translation mode of text as translate-enabled.',
	],
	'the-translate-attribute-008.html': [
	'translate=yes',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'If the translate attribute is set to yes, javascript will detect the translation mode of text as translate-enabled.',
	],
	'the-translate-attribute-009.html': [
	'translate=no',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'If the translate attribute is set to no, javascript will detect the translation mode of text as no-translate.',
	],
	'the-translate-attribute-010.html': [
	'translate inherits no',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'If the translate attribute is set to no, javascript will detect the translation mode of elements inside that element with no translate flag as no-translate.',
	],
	'the-translate-attribute-011.html': [
	'translate=yes inside translate=no',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'If the translate attribute is set to yes on an element inside an element with the translate attribute set to no, javascript will detect the translation mode of text in the inner element as translate-enabled.',
	],
	'the-translate-attribute-012.html': [
	'translate=""',
	'http://www.w3.org/TR/html5/dom.html#the-translate-attribute',
	'If the translate attribute is set to a null string, javascript will detect the translation mode of text as translate-enabled.',
	],
}

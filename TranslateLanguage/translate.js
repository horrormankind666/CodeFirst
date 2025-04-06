(function () {
	this.Translate = function (dict, defaultLang) {
		let lang = (defaultLang || 'en');

		this.language = lang;

		(function (translate) {
			if (dict !== null) {
				translate.contents = dict;
				translate.contents.prop = function (key) {
					let result = this;
					let keyArr = key.split('.');

					for (var index = 0; index < keyArr.length; index++) {
						let prop = keyArr[index];

						result = result[prop];
					}

					return result;
				};
			}
			
			translate.localize();
		})(this);
	};

	this.Translate.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.Translate.prototype.lang = function (lang) {
		if (typeof lang === 'string')
			this.language = lang;

		this.localize();

		return this.language;
	};

	this.Translate.prototype.localize = function () {
		let contents = this.contents;

		if (!this.hasCachedContents()) {
			return;
		}

		let dfs = function (node, keys, results) {
			let isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}

			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					let myKey = keys.slice();

					myKey.push(prop);

					if (isLeaf(node[prop])) {
						results.push(myKey.reduce(function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					}
					else {
						dfs(node[prop], myKey, results);
					}
				}
			}

			return results;
		};

		let keys = dfs(contents, [], []);

		for (var index = 0; index < keys.length; index++) {
			let key = keys[index];
			let translateText = (contents.prop(key).hasOwnProperty(this.language) ? contents.prop(key)[this.language] : contents.prop(key)['en']);
			let elesDataTranslateText = document.querySelectorAll('[data-translate="' + key + '"]');
			let elesDataTranslatePlaceholder = document.querySelectorAll('[data-translate-placeholder="' + key + '"]');
			let elesDataTranslateValue = document.querySelectorAll('[data-translate-value="' + key + '"]');

			if (elesDataTranslateText.length > 0) {
				elesDataTranslateText.forEach((eleDataTranslateText) => {
					eleDataTranslateText.textContent = translateText;
				});
			}

			if (elesDataTranslatePlaceholder.length > 0) {
				elesDataTranslatePlaceholder.forEach((eleDataTranslatePlaceholder) => {
					eleDataTranslatePlaceholder.setAttribute('placeholder', translateText);
				});
			}

			if (elesDataTranslateValue.length > 0) {
				elesDataTranslateValue.forEach((eleDataTranslateValue) => {
					eleDataTranslateValue.setAttribute('value', translateText);
				});
			}
		}
	};
}).apply(window)
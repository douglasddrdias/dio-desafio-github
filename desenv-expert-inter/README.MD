instalação d eum style guide

npm install eslint --save-dev

foi usado modelo do airbnb

retirar algumas validações

        "react/react-in-jsx-scope": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-spreading": "off",
        "no-unused-expressions": "off",
        "react/prop-types": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "no-param-reassign": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".js"] }],
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never"
          }

react router dom v

com o styled componente pode ser usado o recurso de polimorfico passando o as na tag do styled
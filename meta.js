module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "department": {
            "type": "list",
            "required": true,
            "message": "部门名称",
            "choices": [
                "vue",
                "project"
            ]
        },
        "name": {
            "type": "string",
            "required": true,
            "message": "项目名称"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "port": {
            "type": "string",
            "message": "本地开发端口",
            "default": 8080
        }
    },
    "filters": {
        "test/unit/**/*": "unit",
        "test/e2e/**/*": "e2e",
        "src/vuex/**/*": "vuex",
        "src/router-config.js": "router"
    },
    "completeMessage": "Just coding 💻"
}

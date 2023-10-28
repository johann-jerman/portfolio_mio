/product
get all GET

```
{
    "data": [
        {
            "id": 2,
            "name": "nbnmm",
            "price": 2000,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae felis ac neque tincidunt euismod. Integer venenatis neque at nisi tincidunt, at tincidunt purus fringilla. Sed non suscipit odio. Quisque sed elit ac sapien tincidunt condimentum. Maecenas vel orci ac erat tristique posuere. Vestibulum eget nunc vel metus bibendum lacinia. Nunc auctor, justo sed egestas iaculis, nunc ex tristique justo, ac euismod ligula metus vel turpis. Sed a odio id nunc tincidunt vulputate vel nec odio. .",
            "ProductCategoryId": 1,
            "createdAt": "2023-10-25T18:24:39.410Z",
            "updatedAt": "2023-10-25T18:25:00.757Z",
            "deletedAt": null,
            "category": {
                "id": 1,
                "category": "phone"
            },
            "images": [
                {
                    "id": 1,
                    "image": "1698258279125.7903.png",
                    "type": "image/png",
                    "size": "4499179",
                    "path": "/image/1698258279125.7903.png",
                    "ImageProducts": {
                        "createdAt": "2023-10-25T18:24:39.564Z",
                        "updatedAt": "2023-10-25T18:24:39.564Z",
                        "productId": 2,
                        "imageId": 1
                    }
                },
                {
                    "id": 2,
                    "image": "1698258279291.7534.png",
                    "type": "image/png",
                    "size": "91048",
                    "path": "/image/1698258279291.7534.png",
                    "ImageProducts": {
                        "createdAt": "2023-10-25T18:24:39.572Z",
                        "updatedAt": "2023-10-25T18:24:39.572Z",
                        "productId": 2,
                        "imageId": 2
                    }
                }
            ]
        },
        .............................
    ]
}
```

/product/:id
get by id GET

```
{
    "data": {
        "id": 2,
        "name": "nbnmm",
        "price": 2000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae felis ac neque tincidunt euismod. Integer venenatis neque at nisi tincidunt, at tincidunt purus fringilla. Sed non suscipit odio. Quisque sed elit ac sapien tincidunt condimentum. Maecenas vel orci ac erat tristique posuere. Vestibulum eget nunc vel metus bibendum lacinia. Nunc auctor, justo sed egestas iaculis, nunc ex tristique justo, ac euismod ligula metus vel turpis. Sed a odio id nunc tincidunt vulputate vel nec odio. .",
        "ProductCategoryId": 1,
        "createdAt": "2023-10-25T18:24:39.410Z",
        "updatedAt": "2023-10-25T18:25:00.757Z",
        "deletedAt": null,
        "category": {
            "id": 1,
            "category": "phone"
        },
        "images": [
            {
                "id": 1,
                "image": "1698258279125.7903.png",
                "type": "image/png",
                "size": "4499179",
                "path": "/image/1698258279125.7903.png",
                "ImageProducts": {
                    "createdAt": "2023-10-25T18:24:39.564Z",
                    "updatedAt": "2023-10-25T18:24:39.564Z",
                    "productId": 2,
                    "imageId": 1
                }
            },
            {
                "id": 2,
                "image": "1698258279291.7534.png",
                "type": "image/png",
                "size": "91048",
                "path": "/image/1698258279291.7534.png",
                "ImageProducts": {
                    "createdAt": "2023-10-25T18:24:39.572Z",
                    "updatedAt": "2023-10-25T18:24:39.572Z",
                    "productId": 2,
                    "imageId": 2
                }
            }
        ]
    }
}
```

/product
create POST
BODY TOKEN required

```
{
    "data": {
        "id": 3,
        "name": "producto",
        "price": 2000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae felis ac neque tincidunt euismod. Integer venenatis neque at nisi tincidunt, at tincidunt purus fringilla. Sed non suscipit odio. Quisque sed elit ac sapien tincidunt condimentum. Maecenas vel orci ac erat tristique posuere. Vestibulum eget nunc vel metus bibendum lacinia. Nunc auctor, justo sed egestas iaculis, nunc ex tristique justo, ac euismod ligula metus vel turpis. Sed a odio id nunc tincidunt vulputate vel nec odio. Cras eget vestibulum ex. Vivamus id tristique justo, id finibus eros. Sed vehicula, libero a auctor auctor, arcu ",
        "ProductCategoryId": 1,
        "images": [
            {
                "id": 3,
                "image": "1698401503164.4294.png",
                "type": "image/png",
                "size": "4499179",
                "path": "/image/1698401503164.4294.png",
                "updatedAt": "2023-10-27T10:11:43.309Z",
                "createdAt": "2023-10-27T10:11:43.309Z",
                "deletedAt": null
            },
            {
                "id": 4,
                "image": "1698401503203.8591.png",
                "type": "image/png",
                "size": "91048",
                "path": "/image/1698401503203.8591.png",
                "updatedAt": "2023-10-27T10:11:43.309Z",
                "createdAt": "2023-10-27T10:11:43.309Z",
                "deletedAt": null
            }
        ],
        "updatedAt": "2023-10-27T10:11:43.220Z",
        "createdAt": "2023-10-27T10:11:43.220Z",
        "deletedAt": null
    }
}
```

/product/:id
update PUT
BODY TOKEN required

```
{
    "data": {
        "id": 3,
        "name": "producto",
        "price": 2000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae felis ac neque tincidunt euismod. Integer venenatis neque at nisi tincidunt, at tincidunt purus fringilla. Sed non suscipit odio. Quisque sed elit ac sapien tincidunt condimentum. Maecenas vel orci ac erat tristique posuere. Vestibulum eget nunc vel metus bibendum lacinia. Nunc auctor, justo sed egestas iaculis, nunc ex tristique justo, ac euismod ligula metus vel turpis. Sed a odio id nunc tincidunt vulputate vel nec odio. Cras eget vestibulum ex. Vivamus id tristique justo, id finibus eros. Sed vehicula, libero a auctor auctor, arcu ",
        "ProductCategoryId": 1,
        "images": [
            {
                "id": 3,
                "image": "1698401503164.4294.png",
                "type": "image/png",
                "size": "4499179",
                "path": "/image/1698401503164.4294.png",
                "updatedAt": "2023-10-27T10:11:43.309Z",
                "createdAt": "2023-10-27T10:11:43.309Z",
                "deletedAt": null
            },
            {
                "id": 4,
                "image": "1698401503203.8591.png",
                "type": "image/png",
                "size": "91048",
                "path": "/image/1698401503203.8591.png",
                "updatedAt": "2023-10-27T10:11:43.309Z",
                "createdAt": "2023-10-27T10:11:43.309Z",
                "deletedAt": null
            }
        ],
        "updatedAt": "2023-10-27T10:11:43.220Z",
        "createdAt": "2023-10-27T10:11:43.220Z",
        "deletedAt": null
    }
}
```

/product/:id
delete DELETE

```
{
    "data": 1
}
```

export default{
    name: 'Project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image Title',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,

            }, 
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 90,
            }

        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
    ]
}

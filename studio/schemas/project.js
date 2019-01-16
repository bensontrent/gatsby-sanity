export default {
<<<<<<< HEAD
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
=======
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
>>>>>>> first commit
        maxLength: 96
      }
    },
    {
<<<<<<< HEAD
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockText"
    },
    {
      title: "Project Link",
      name: "projectLink",
      type: "url"
    },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "projectMember" }]
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
=======
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'projectMember' }]
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
>>>>>>> first commit
    }
  ],
  preview: {
    select: {
<<<<<<< HEAD
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImage"
    },
    prepare({ title = "No title", publishedAt, image }) {
=======
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
>>>>>>> first commit
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
<<<<<<< HEAD
          : "Missing publishing date",
        media: image
      };
    }
  }
};
=======
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
>>>>>>> first commit

---
title: "Projects Collection"
description: "How to add projects to your portfolio."
date: "2024-03-20"
---

---

## Working with the `projects` collection

The `projects` collections is found in `src/content/projects`.

```
📁 /src/content/projects
└── 📁 project-1
      └── 📄 index.md
└── 📁 project-2
      └── 📄 index.mdx
```

In the above example, two project posts will be generated with the folder name representing the slug.

- `https://example.com/projects/project-1`
- `https://example.com/projects/project-2`

---

## Provide metadata

```astro
---
title: "фы";
description: "фы is an accessible theme for Astro.";
date: "2024-03-20";
draft: false;
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean | If draft: true, content will not be published.   |
| demoURL     | No  | string  | Link to live project demo, if available.         |
| repoURL     | No  | string  | Link to project repo, if available.              |

---

All that's left to do is write the content under the metadata.

```astro
---
title: "фыв";
description: "фыв is an accessible theme for Astro";
date: "2024-03-20";
draft: false;
---

##  Сервак
<!-- content -->
```

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .bg-page {
    background-color: var(--aw-color-bg-page);
  }
  .bg-dark {
    background-color: var(--aw-color-bg-page-dark);
  }
  .bg-light {
    background-color: var(--aw-color-bg-page);
  }
  .text-page {
    color: var(--aw-color-text-page);
  }
  .text-muted {
    color: var(--aw-color-text-muted);
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center rounded-full border-gray-400 border bg-transparent font-medium text-center text-base text-page leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 hover:bg-gray-100 hover:border-gray-600 dark:text-slate-300 dark:border-slate-500 dark:hover:bg-slate-800 dark:hover:border-slate-800 cursor-pointer;
  }

  .btn-primary {
    @apply btn font-semibold bg-primary text-white border-primary hover:bg-secondary hover:border-secondary hover:text-white dark:text-white dark:bg-primary dark:border-primary dark:hover:border-secondary dark:hover:bg-secondary;
  }

  .btn-secondary {
    @apply btn;
  }

  .btn-tertiary {
    @apply btn border-none shadow-none text-muted hover:text-gray-900 dark:text-gray-400 dark:hover:text-white;
  }
}

#header.scroll > div:first-child {
  @apply bg-page md:bg-white/90 md:backdrop-blur-md;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
}
.dark #header.scroll > div:first-child,
#header.scroll.dark > div:first-child {
  @apply bg-page md:bg-[#030621e6] border-b border-gray-500/20;
  box-shadow: none;
}
/* #header.scroll > div:last-child {
  @apply py-3;
} */

#header.expanded nav {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 70px !important;
  padding: 0 5px;
}

.dropdown:focus .dropdown-menu,
.dropdown:focus-within .dropdown-menu,
.dropdown:hover .dropdown-menu {
  display: block;
}

[astro-icon].icon-light > * {
  stroke-width: 1.2;
}

[astro-icon].icon-bold > * {
  stroke-width: 2.4;
}

[data-aw-toggle-menu] path {
  @apply transition;
}
[data-aw-toggle-menu].expanded g > path:first-child {
  @apply -rotate-45 translate-y-[15px] translate-x-[-3px];
}

[data-aw-toggle-menu].expanded g > path:last-child {
  @apply rotate-45 translate-y-[-8px] translate-x-[14px];
}

/* To deprecated */

.dd *:first-child {
  margin-top: 0;
}

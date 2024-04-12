export class screenFactory {
  constructor(children, prerequisites) {
    //  all these constructor values are found within our poral <Screen.header> >
    this.header = children
      ? children.filter((child) => child.type['display-name'] === 'header')[0]
      : null;
    //  filter the children and find the child a object[key] called display name and this should be the header ect if there is no header no problem just render nothing
    this.content = children
      ? children.filter((child) => child.type['display-name'] === 'content')[0]
      : null;
    this.footer = children
      ? children.filter((child) => child.type['display-name'] === 'footer')[0]
      : null;
    this.prerequisites = children
      ? children.filter(
          (child) => child.type['display-name'] === 'prerequisites'
        )[0]
      : null;
    this.bottomSheet = children
      ? children.filter(
          (child) => child.type['display-name'] === 'bottom-sheet'
        )[0]
      : null;
    this.bottomNavigation = children
      ? children.filter(
          (child) => child.type['display-name'] === 'bottom-navigation'
        )[0]
      : null;
  }
}
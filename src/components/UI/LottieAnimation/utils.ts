export enum AnimationsEnum {
  LoadingSpinner,
  None,
  RegisterLogo,
  RegisterBackground,
}

export function getSource(): string {
  return require('./animations/loading_animation.json');
}

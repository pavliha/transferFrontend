const nextStep = () => {
  return { type: 'NEXT_STEP' };
}

const goToStep = (number) => {
  return { type: 'GO_TO_STEP', payload: number };
}

const prevStep = () => {
  return { type: 'PREV_STEP' };
}

export default {
  nextStep, prevStep, goToStep
}

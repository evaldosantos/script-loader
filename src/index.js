
export function scriptLoader(scripts) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    
    script.src = scripts;
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    };
    
  });
}


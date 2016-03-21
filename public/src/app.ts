const boot = () => { /* App bootstrap command goes here */ };

/* Do the initial boot */
boot();

/* Hook is notified on file changes, allows customization of behavior per file */
System['@hotLoader'].on('change', (file: string) => boot);

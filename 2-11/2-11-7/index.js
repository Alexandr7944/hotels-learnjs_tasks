// Вопрос об "if"

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

/**
 * first ( -1 )
 * third (1)
 */
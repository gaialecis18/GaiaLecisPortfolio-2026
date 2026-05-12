function renderHighlightedText(text) {
  if (typeof text !== 'string') {
    return text;
  }

  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} className="text-highlight">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function RichText({ as: Component = 'span', children, className }) {
  return (
    <Component className={className}>
      {renderHighlightedText(children)}
    </Component>
  );
}

export default RichText;

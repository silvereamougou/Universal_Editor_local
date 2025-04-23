export default function decorate() {
  // Example meta tag
  const desc = document.createElement('meta');
  desc.name = 'description';
  desc.content = 'Site description';
  document.head.append(desc);

  // Adobe Universal Editor meta tag
  const aueMeta = document.createElement('meta');
  aueMeta.name = 'urn:adobe:aue:config:service';
  aueMeta.content = 'https://localhost:8000';  // Or the URL for your Universal Editor service
  document.head.append(aueMeta);
}

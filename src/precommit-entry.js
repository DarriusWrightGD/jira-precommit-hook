import fsp from 'fs-promise';
import lodash from 'lodash';

export function getCommitMsg (path) {
  return fsp.readFile(path, {encoding: 'utf8'});
}

export function getIssueReference(msgToParse, prjKey) {
  let pattern = RegExp(`${prjKey}-\\d+`, 'g');
  let commentPattern = RegExp(`^#.*$`, 'gm');

  msgToParse = msgToParse.replace(commentPattern, '');
  let references = msgToParse.match(pattern);

  return lodash.unique(references);
}

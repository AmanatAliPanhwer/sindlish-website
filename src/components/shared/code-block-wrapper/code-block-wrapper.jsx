'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';
import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import { runSindlish } from 'lib/sindlish-interpreter';
import { cn } from 'utils/cn';
import getLanguageIcon from 'utils/get-language-icon';
import sendGtagEvent from 'utils/send-gtag-event';
import CheckIcon from './images/check.inline.svg';
import CopyIcon from './images/copy.inline.svg';
function extractTextFromNode(node) {
  // Base case: if the node is a string, return it.
  if (typeof node === 'string') return node;
  // Check if the node is an object and has the required properties.
  if (typeof node !== 'object' || !node.props || !node.props.children) return '';
  // Skip removed lines of code from differences
  if (node.props.className?.includes('remove')) return '__line_removed_in_code__';
  // If the children are in an array, loop through them.
  if (Array.isArray(node.props.children)) {
    let text = '';
    node.props.children.forEach((child) => {
      text += extractTextFromNode(child);
    });
    return text;
  }
  // If there's only one child, process that child directly.
  return extractTextFromNode(node.props.children);
}
const CodeBlockWrapper = ({
  className = '',
  copyButtonClassName = '',
  filename = null,
  language = null,
  trackingLabel = null,
  copyCode = null,
  children,
  as: Tag = 'figure',
  ...otherProps
}) => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, running
  const [loadProgress, setLoadProgress] = useState('');
  // copyCode bypasses extractTextFromNode, which can't traverse RSC lazy chunks in children
  const code =
    copyCode ?? extractTextFromNode(children).replace(/(\n)?__line_removed_in_code__(\n)?/g, '');
  const isSingleLineCode = code.trimEnd().split('\n').length === 1;
  let copyButtonTopClassName = 'top-4';
  if (filename) {
    copyButtonTopClassName = 'top-[58px]';
  } else if (isSingleLineCode) {
    copyButtonTopClassName = 'top-[min(1rem,calc(50%-.8175rem))]';
  }
  const handleCopyWithTracking = () => {
    handleCopy(code);
    if (trackingLabel) {
      sendGtagEvent('Button Clicked', { text: trackingLabel });
    }
  };
  const handleRun = async () => {
    if (status === 'running' || status === 'loading') return;

    setStatus('running');
    setResult(null);
    setLoadProgress('Initializing...');
    try {
      const output = await runSindlish(code, (progress) => {
        setLoadProgress(progress);
      });
      setResult(output);
      setStatus('idle');
      setLoadProgress('');
    } catch (err) {
      setResult(`Error: ${err.message}`);
      setStatus('idle');
      setLoadProgress('');
    }
  };
  const isSindlish = language === 'sd' || language === 'sindlish' || language === 'js' || language === 'javascript';
  return (
    <Tag
      className={cn(
        'code-block group/code-block relative flex flex-col [&_pre]:min-w-full',
        filename && 'overflow-hidden',
        className
      )}
      data-has-filename={filename ? 'true' : 'false'}
      {...otherProps}
    >
      {filename && (
        <div className="flex h-11 items-center gap-2 truncate border-b border-gray-new-80 bg-gray-new-98 px-4 text-[13px] leading-none font-medium tracking-tight text-gray-new-40 dark:border-gray-new-20 dark:bg-gray-new-8 dark:text-gray-new-70">
          {getLanguageIcon(language)}
          {filename}
        </div>
      )}

      <div className="relative">
        {children}
        {/* Action Buttons Container */}
        <div className={cn(
          'invisible absolute right-4 flex gap-2 opacity-0 transition-[opacity,visibility] duration-200 group-hover/code-block:visible group-hover/code-block:opacity-100 lg:visible lg:opacity-100',
          copyButtonTopClassName
        )}>
          {/* Run Button */}
          {isSindlish && (
            <button
              className="flex items-center gap-1.5 border border-gray-new-80 bg-white px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-new-40 transition-all hover:border-[#E02424] hover:text-[#E02424] dark:border-gray-new-20 dark:bg-black-pure dark:text-gray-new-60 dark:hover:border-[#E02424] dark:hover:text-[#E02424] disabled:opacity-50"
              type="button"
              onClick={handleRun}
              disabled={status === 'running' || status === 'loading'}
            >
              {status === 'running' || status === 'loading' ? (
                <span className="size-2 animate-spin rounded-full border border-current border-t-transparent" />
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              )}
              {status === 'loading' || status === 'running' ? 'Running' : 'Run'}
            </button>
          )}
          {/* Copy Button */}
          <button
            className={cn(
              'border border-gray-new-80 bg-white p-1.5 text-gray-new-40 transition-[background-color] duration-200 hover:bg-gray-new-90 dark:border-gray-new-20 dark:bg-black-pure dark:text-gray-new-60 dark:hover:bg-gray-new-8',
              copyButtonClassName
            )}
            type="button"
            aria-label={isCopied ? 'Copied' : 'Copy'}
            disabled={isCopied}
            onClick={handleCopyWithTracking}
          >
            {isCopied ? (
              <CheckIcon className="h-3.5 w-3.5 text-current" />
            ) : (
              <CopyIcon className="h-3.5 w-3.5 text-current" />
            )}
          </button>
        </div>
      </div>
      {/* Inline Console Output */}
      {(result !== null || loadProgress) && (
        <div className="border-t border-gray-new-80 bg-gray-new-98 p-4 font-mono text-[13px] dark:border-gray-new-20 dark:bg-gray-new-8">
          <div className="mb-2 flex items-center justify-between opacity-50">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {loadProgress ? 'Execution Status' : 'Console Output'}
            </span>
            {result && (
              <button
                onClick={() => setResult(null)}
                className="hover:text-[#E02424] transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          {loadProgress && !result && (
            <div className="flex items-center gap-2 text-gray-new-50 italic animate-pulse">
              <span className="size-1.5 bg-[#E02424]" />
              {loadProgress}
            </div>
          )}
          {result && (
            <pre
              className="whitespace-pre-wrap text-green-600 dark:text-green-400"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          )}
        </div>
      )}
    </Tag>
  );
};

export default CodeBlockWrapper;
CodeBlockWrapper.propTypes = {
  className: PropTypes.string,
  copyButtonClassName: PropTypes.string,
  filename: PropTypes.string,
  language: PropTypes.string,
  trackingLabel: PropTypes.string,
  copyCode: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
};

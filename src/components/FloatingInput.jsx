import { useId, useState } from 'react';

export default function FloatingInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
  required = false,
  rows,
  ...props
}) {
  const inputId = id || useId();
  const [focused, setFocused] = useState(false);
  const hasValue = value != null && String(value).length > 0;
  // Float label when: has value, focused, or type is date (browser shows own placeholder)
  const isFloating = hasValue || focused || type === 'date';

  const inputClasses = `
    w-full px-4 pt-6 pb-3 rounded-xl glass border border-white/10 transition-all duration-300
    bg-white/5 text-white placeholder-transparent
    focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 outline-none
  `.trim();

  const labelClasses = `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${isFloating ? 'top-2 text-xs text-primary-400' : 'top-1/2 -translate-y-1/2 text-base text-gray-500'}
  `.trim();

  if (rows) {
    return (
      <div className="relative">
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={rows}
          placeholder=" "
          className={inputClasses}
          {...props}
        />
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder=" "
        className={inputClasses}
        {...props}
      />
      <label htmlFor={inputId} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}

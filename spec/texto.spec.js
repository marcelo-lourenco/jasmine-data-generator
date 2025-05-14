const { palavra, sentenca, paragrafo } = require('gerador-br');

describe('Tests for text generation functions', () => {
  it('Should return a random word from the word list', () => {
    const result = palavra();
    expect(typeof result).toBe('string');
  });

  it('Should generate a sentence with the default number of words (10 to 20)', () => {
    const result = sentenca();
    const wordCount = result.split(' ').length;
    expect(wordCount >= 10 && wordCount <= 20).toBe(true, `Sentence contains ${wordCount} words`);
    expect(result.endsWith('.')).toBe(true, 'Sentence should end with a period');
  });

  it('Should generate a sentence with the exact number of words provided', () => {
    const wordCount = 15;
    const result = sentenca(wordCount);
    const generatedWordCount = result.split(' ').length;
    expect(generatedWordCount).toBe(wordCount, `Sentence contains ${generatedWordCount} words`);
  });

  it('Should generate a paragraph with 1 sentence and a random number of words', () => {
    const result = paragrafo();
    const sentenceCount = result.split('\n').length;
    expect(sentenceCount).toBe(1, 'Paragraph should contain 1 sentence');
    expect(result.endsWith('.')).toBe(true, 'Paragraph should end with a period');
  });

  it('Should generate a paragraph with 3 sentences and the default number of words per sentence', () => {
    const sentenceCount = 3;
    const result = paragrafo(sentenceCount);
    const generatedSentenceCount = result.split('\n').length;
    expect(generatedSentenceCount).toBe(sentenceCount, `Paragraph contains ${generatedSentenceCount} sentences`);
  });

  it('Should generate a paragraph with 2 sentences and 8 words per sentence', () => {
    const sentenceCount = 2;
    const wordCount = 8;
    const result = paragrafo(sentenceCount, wordCount);
    const sentences = result.split('\n');
    expect(sentences.length).toBe(sentenceCount, `Paragraph contains ${sentences.length} sentences`);
    sentences.forEach((sentence) => {
      const generatedWordCount = sentence.split(' ').length;
      expect(generatedWordCount).toBe(wordCount, `Sentence contains ${generatedWordCount} words`);
    });
  });
});
